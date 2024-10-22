import { Route, Switch } from 'react-router-dom';

const PageContent = ({ children }) => {
  return (
    <div className="w-full m-0 p-0">
      {children || (
        <Switch>
          <Route path="/*" component={() => <div />} />
        </Switch>
      )}
    </div>
  );
};

export default PageContent;