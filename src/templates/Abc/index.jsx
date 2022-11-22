import { useNavigate, useParams } from 'react-router-dom';

export const Abc = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  return <div onClick={() => navigate('/')}>OI CARAI</div>;
};
