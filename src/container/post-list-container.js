import { connect } from "react-redux"
import PropTypes from "prop-types"
import { not_read } from "../modules/post-list-state"
import PostList from "../components/post-list"

PostList.propTypes = {
    filted: PropTypes.bool.isRequired,
    not_read: PropTypes.func.isRequired
}

const mapStateToProps = ({ postListReducer }) => {
    return { filted: postListReducer.filted }
}

const mapDispatchToProps = dispatch => {
    return {
        not_read: (value) => dispatch(not_read(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)