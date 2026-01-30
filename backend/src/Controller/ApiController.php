<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

#[Route('/api', name: 'api_')]
class ApiController extends AbstractController
{
    /**
     * Health check endpoint to verify API is running
     */
    #[Route('/health', name: 'health', methods: ['GET'])]
    public function health(): JsonResponse
    {
        return $this->json([
            'status' => 'ok',
            'timestamp' => (new \DateTime())->format('c'),
            'version' => '3.0.0',
        ]);
    }

    /**
     * Example GET endpoint - returns sample data
     */
    #[Route('/data', name: 'data', methods: ['GET'])]
    public function getData(): JsonResponse
    {
        // Example data - replace with actual database queries
        $data = [
            'items' => [
                ['id' => 1, 'name' => 'Item 5', 'description' => 'First item'],
                ['id' => 2, 'name' => 'Item 2', 'description' => 'Second item'],
                ['id' => 3, 'name' => 'Item 3', 'description' => 'Third item'],
            ],
            'total' => 3,
        ];

        return $this->json($data);
    }

    /**
     * Example POST endpoint - handles form submissions
     */
    #[Route('/submit', name: 'submit', methods: ['POST'])]
    public function submit(Request $request): JsonResponse
    {
        $content = json_decode($request->getContent(), true);

        if (!$content) {
            return $this->json([
                'success' => false,
                'error' => 'Invalid JSON payload',
            ], 400);
        }

        // Process the data here (save to database, send emails, etc.)
        
        return $this->json([
            'success' => true,
            'message' => 'Data received successfully',
            'received' => $content,
        ]);
    }

    /**
     * Example endpoint with path parameter
     */
    #[Route('/items/{id}', name: 'item_detail', methods: ['GET'])]
    public function getItem(int $id): JsonResponse
    {
        // Example - replace with actual database query
        $item = [
            'id' => $id,
            'name' => "Item {$id}",
            'description' => "This is item number {$id}",
            'createdAt' => (new \DateTime())->format('c'),
        ];

        return $this->json($item);
    }

    /**
     * Contact form email endpoint
     */
    #[Route('/contact-email', name: 'contact_email', methods: ['POST'])]
    public function contactEmail(Request $request, MailerInterface $mailer): JsonResponse
    {
        $content = json_decode($request->getContent(), true);

        // Validate required fields
        if (!isset($content['name']) || !isset($content['email']) || !isset($content['message'])) {
            return $this->json([
                'success' => false,
                'message' => 'Missing required fields: name, email, message',
            ], 400);
        }

        // Validate email format
        if (!filter_var($content['email'], FILTER_VALIDATE_EMAIL)) {
            return $this->json([
                'success' => false,
                'message' => 'Invalid email address',
            ], 400);
        }

        try {
            // Create the email
            $email = (new Email())
                ->from($_ENV['MAILER_FROM'])
                ->to($_ENV['CONTACT_EMAIL'])
                ->subject('New Contact Form Submission from ' . $content['name'])
                ->text($this->formatEmailText($content))
                ->html($this->formatEmailHtml($content));

            // Send the email
            $mailer->send($email);

            return $this->json([
                'success' => true,
                'message' => 'Email sent successfully. We will contact you soon!',
            ]);

        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'message' => 'Email sent unsuccessfully',
            ], 500);
        }
    }

    /**
     * Format email as plain text
     */
    private function formatEmailText(array $data): string
    {
        return sprintf(
            "New contact form submission:\n\n" .
            "Name: %s\n" .
            "Email: %s\n" .
            "Message:\n%s",
            $data['name'],
            $data['email'],
            $data['message']
        );
    }

    /**
     * Format email as HTML
     */
    private function formatEmailHtml(array $data): string
    {
        return sprintf(
            '<html><body>' .
            '<h2>New Contact Form Submission</h2>' .
            '<p><strong>Name:</strong> %s</p>' .
            '<p><strong>Email:</strong> %s</p>' .
            '<p><strong>Message:</strong></p>' .
            '<p>%s</p>' .
            '</body></html>',
            htmlspecialchars($data['name']),
            htmlspecialchars($data['email']),
            nl2br(htmlspecialchars($data['message']))
        );
    }
}

