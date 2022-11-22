import { useHistory, useParams } from 'react-router-dom';

export const Abc = () => {
  const params = useParams();
  const history = useHistory();
  console.log(params);
  return <div onClick={() => history.push('/')}>OI CARAI</div>;
};
