import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

function IsScreenLoading({ isScreenLoading }) {
  return (
    <>
      {isScreenLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(255,255,255,0.3)',
            zIndex: 999,
          }}
        >
          <ReactLoading type="balls" color="pink" width="4rem" height="4rem" />
        </div>
      )}
    </>
  );
}

IsScreenLoading.propTypes = {
  isScreenLoading: PropTypes.bool.isRequired,
};

export default IsScreenLoading;
