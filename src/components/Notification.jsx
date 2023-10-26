import PropTypes from 'prop-types'

const Notification = (props) => {

    return (
        <div className={`flex items-start gap-3 text-black ${props.read ? '' : 'bg-light-gray-blue'} px-3 py-4 m-1 rounded-md`}>
            <img className="object-contain" width={50} height={50} src={props.avatarImgUrl} alt={`avatar image of ${props.name}`} />
            <div className="text-sm md:text-base">
                <span className="font-bold hover:text-blue hover:cursor-pointer">{props.name}</span>
                <span className="text-dark-gray-blue">&nbsp;&nbsp;{props.action}</span>
                {props.postTitle ? <span className="font-bold text-dark-gray-blue hover:text-blue hover:cursor-pointer">&nbsp;&nbsp;{props.postTitle}</span> : null}
                {props.groupName ? <span className="font-bold text-blue hover:cursor-pointer"> {props.groupName}</span> : null}
                {!props.read ? <div className="w-[10px] h-[10px] ml-1 bg-red rounded-full inline-block"></div> : null}
                <p className="text-gray-blue">{props.timestamp}</p>
                {props.message ? <div className="mt-2 border-[1px] border-light-gray-blue-2 text-dark-gray-blue p-3 rounded-md hover:cursor-pointer hover:bg-light-gray-blue-1 hover:border-light-gray-blue-1">{props.message}</div> : null}
            </div>
            {props.postImgUrl ? <img className="ml-auto object-contain hover:cursor-pointer" width={50} height={50} src={props.postImgUrl} alt="cheesy chess image" /> : null}
        </div>
    )
}

Notification.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    avatarImgUrl: PropTypes.string,
    action: PropTypes.string,
    postTitle: PropTypes.string,
    groupName: PropTypes.string,
    message: PropTypes.string,
    postImgUrl: PropTypes.string,
    timestamp: PropTypes.string,
    read: PropTypes.bool
}

export default Notification