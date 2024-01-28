import PropTypes from 'prop-types';

const ListItemSkeleton = ({imageUrl}) => {
  console.log(imageUrl)
  return (
    <>
      <li className="skeleton">
    <div className="skeleton__block">
      <img src={imageUrl} alt="" />
    </div>
    <div className="skeleton__block"></div>
    <div className="skeleton__block"></div>
  </li>
    </>
  )
}

ListItemSkeleton.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default ListItemSkeleton