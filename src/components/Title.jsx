import PropTypes from 'prop-types';

const Title = ({ text, className = '' }) => {
  return (
    <section
      className={`mt-3 text-3xl font-bold text-center mb-8 text-gray-100 dark:text-gray-200 ${className}`}
>


<h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent sm:text-4xl lg:text-5xl font-black">
    {text}</h1>
    </section>
  );
};

// Prop validation
Title.propTypes = {
  text: PropTypes.string.isRequired, // Ensure text is a string and required
  className: PropTypes.string, // Optional className for custom styling
};

// Default prop values
Title.defaultProps = {
  className: '', // Default empty string for className
};

export default Title;
