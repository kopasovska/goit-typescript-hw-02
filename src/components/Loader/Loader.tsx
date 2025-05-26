import { BeatLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <BeatLoader
        color="pink"
        loading={true}
        size={26}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;