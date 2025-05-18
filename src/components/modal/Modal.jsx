import PropTypes from "prop-types";
import { useState } from "react";
import '../modal/modal.css'

const Modal = ({ opened, Content, children }) => {
  const [isOpened, setIsOpened] = useState(opened);
  return (
    <>
      {children({ isOpened, setIsOpened })}
      {isOpened && (
        <div className="modal">
          <div className="modal-content">
            {Content}
            <button type="button" onClick={() => setIsOpened(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Modal.defaultProps = {
  opened: false,
}

Modal.propTypes = {
  opened: PropTypes.bool,
  Content: PropTypes.node.isRequired,
  children: PropTypes.func.isRequired,
}

export default Modal;