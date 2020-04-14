import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../components/home/home";
import About from "../../components/about/about";
import Blog from "../../components/blog/blog";
import Seo from "../../components/seo/seo";
import Projects from "../../components/projects/projects";
import Themes from "../../components/themes/themes";

const SwitchNav = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
    <Route path="/seo" component={Seo} />
    <Route path="/projects" component={Projects} />
    <Route path="/themes" component={Themes} />
  </Switch>
);

export default SwitchNav;
