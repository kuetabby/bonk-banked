"use client";
import React from "react";
import clsx from "clsx";
import { CopyrightOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import { montserrat } from "@/utils/font";

import "./style.css";

interface Props {}

const AppFooter: React.FC<Props> = () => {
  if (!useIsMounted) {
    return null;
  }

  return (
    <footer className={clsx("app-footer bg-app-main", montserrat.className)}>
      <div className="app-footer-wrapper">
        <div className="all-reserved">
          <div className="w-full flex items-center my-2 text-app-secondary">
            <div className="text-base font-bold mx-auto">
              Copyright{" "}
              <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
              2023. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
