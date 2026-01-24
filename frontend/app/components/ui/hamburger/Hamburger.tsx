"use client";
import style from "./hamburger.module.css";
import { useState } from "react";

const TABS = ["Home", "Tracks", "FAQ"];

export default function Hamburger() {
  const [activeTab, setActiveTab] = useState("Team");

  // State for the Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* DRAWER / SIDEBAR OVERLAY */}
      {isDrawerOpen && (
        <>
          <div
            className={style.drawerBackdrop}
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <aside className={style.drawerPanel}>
            {/* Drawer Header */}
            <div className={style.drawerHeader}>
              <div className="text-xl font-bold tracking-widest text-(--primary)">
                MENU
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className={style.closeButton}
              >
                ✕
              </button>
            </div>

            {/* Drawer Navigation */}
            <nav className="space-y-2">
              {TABS.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setActiveTab(option);
                    setIsDrawerOpen(false);
                  }}
                  className={`${style.option} ${activeTab === option ? style.active : ""} px-4 py-3 rounded text-lg`}
                >
                  {option}
                </div>
              ))}
            </nav>
          </aside>
        </>
      )}

      {/* Hamburger Button */}
      {!isDrawerOpen && (
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={style.hamburgerButton}
          type="button"
        >
          <span className="text-xl leading-none">☰</span>
        </button>
      )}
    </>
  );
}
