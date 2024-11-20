export default function ProjectTile(props) {
    return ( <div className="projectShow">
                <img src={props.img} alt="" className="showProject"/>
                <h3>{props.projectTitle}</h3>
                <p>{props.projectDesc}</p>
            </div> );
}