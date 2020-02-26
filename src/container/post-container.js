import { connect } from "react-redux"
import PropTypes from "prop-types"
import { already_read, getFunc, complete_init } from "../modules/post-state"
import Post from "../components/post"

Post.propTypes = {
    reads: PropTypes.array.isRequired,
    already_read: PropTypes.func.isRequired,
    get_init: PropTypes.func.isRequired
}

const mapStateToProps = ({ postReducer }) => {
    return { reads: postReducer.reads }
}

const mapDispatchToProps = dispatch => {
    return {
        already_read: (id) => dispatch(already_read(id)),
        get_init: () => {
            getFunc()
            .then(res => {
                dispatch(complete_init(res))
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)