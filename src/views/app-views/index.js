import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { HOME_PREFIX_PATH } from 'configs/AppConfig';

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${HOME_PREFIX_PATH}/main`}
          component={lazy(() => import(`./main/index.js`))}
        />
        <Route from={`${HOME_PREFIX_PATH}/system`} component={lazy(() => import(`./system`))} />
        <Route path={`${HOME_PREFIX_PATH}`} component={lazy(() => import(`./home`))} />
        <Redirect from={`${HOME_PREFIX_PATH}`} to={`${HOME_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
