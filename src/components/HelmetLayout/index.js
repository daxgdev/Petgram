import React from "react";
import { Helmet } from "react-helmet";

export const HelmetLayout = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        {title && <title>Petgram 🦊 | {title}</title>}
        {description && <meta name="description" content={description} />}
      </Helmet>
      {children}
    </>
  );
};
