import React from "react";
import { Route, createRoutesFromElements } from "react-router-dom";

import App from "./App";

const Routes = () =>
  createRoutesFromElements(
    <Route path="*" element={<App />}>
      {/* <Route path="/" element={<BlogHome />} />
      <Route path="/p/:page" element={<BlogHome />} />
      <Route path="/post/:slug" element={<BlogPost />} /> */}
    </Route>
  );

export default Routes;
