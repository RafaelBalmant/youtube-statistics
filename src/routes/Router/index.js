import React from  'react';
import { Route, Switch } from "react-router-dom";
import { pages } from "../../routes"

function Index() {
  return (
    <>
      <Switch>
        {
          pages.map( page =>
            <Route
              key={ page.path + page.component }
              path={ page.path }
              component={ page.component }/>
          )
        }
      </Switch>
    </>
  );
}

export default Index;