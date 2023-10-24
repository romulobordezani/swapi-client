import { loader, wrapper } from './Loader.style';

function Loader() {
  return (
    <div css={wrapper}>
      <div css={loader}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
