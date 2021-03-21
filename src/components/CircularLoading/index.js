import styles from './CircularLoading.module.css'

const CircularLoading = ({ loading, size, color, cycle }) => {
  if (loading) {
    return (
      <div
        className={styles.loading}
        style={{
          width: size,
          height: size,
          borderWidth: size / 10,
          animationDuration: String(cycle).concat('s'),

          display: 'inline-block',
          borderStyle: 'solid',
          borderColor: `${color} ${color} transparent transparent`,

          borderRadius: '50%',
        }}
      />
    )
  }

  return <div />
}

CircularLoading.defaultProps = {
  size: 14,
  color: 'blue',
  cycle: 0.4, // animation-duration - round per sec
}

export default CircularLoading
