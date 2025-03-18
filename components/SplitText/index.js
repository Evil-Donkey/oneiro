import useSplitText from '../../hooks/useSplitText';

const SplitTextWrapper = ({ children, className = '' }) => {
  useSplitText(className);

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default SplitTextWrapper;
