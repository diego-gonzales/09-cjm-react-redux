import { useNavigate } from 'react-router-dom';

const ButtonHome = () => {
  const navigate = useNavigate();

  return (
    <button className="button-home" onClick={() => navigate('/')}>
      Go to home
    </button>
  );
};

export default ButtonHome;
