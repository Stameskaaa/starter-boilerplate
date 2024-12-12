import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { HOME_PREFIX_PATH } from 'configs/AppConfig';

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          exact
          path={`${HOME_PREFIX_PATH}/main/clients/list`}
          component={lazy(() => import(`./home/main/clients/list/index.js`))}
        />
        <Route
          path={`${HOME_PREFIX_PATH}/main/clients/list/edit`}
          component={lazy(() => import(`./home/main/clients/list/edit/index.js`))}
        />

        <Route
          path={`${HOME_PREFIX_PATH}/main`}
          component={lazy(() => import(`./home/main/index.js`))}
        />
        <Route
          from={`${HOME_PREFIX_PATH}/system`}
          component={lazy(() => import(`./home/system/index.js`))}
        />
        <Route path={`${HOME_PREFIX_PATH}`} component={lazy(() => import(`./home`))} />
        <Redirect from="*" to={`${HOME_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
