import CircularProgress from '@mui/joy/CircularProgress';

const LoadScreen = () => {
  return (
    <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, .7)",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        >
          <CircularProgress size="lg" variant="plain" style={{color: '#e800ff'}}/>
        </div>
  )
}

export default LoadScreen;
