import { connect } from "react-redux"
import PropTypes from "prop-types"
import { already_read } from "../modules/post-state"
import Post from "../components/post"

Post.propTypes = {
    reads: PropTypes.array.isRequired,
    already_read: PropTypes.func.isRequired
}

const mapStateToProps = ({ postReducer }) => {
    return { reads: postReducer.reads }
}

const mapDispatchToProps = dispatch => {
    return {
        already_read: (id) => dispatch(already_read(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)