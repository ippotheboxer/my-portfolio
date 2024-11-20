import ProjectTile from "./ProjectTile";

export default function Work() {
    return (
        <div className="generalContainer">
            <h2 className="homeTitle">🌸 Work</h2>
            <ProjectTile 
            img="https://wallpapers-clan.com/wp-content/uploads/2024/02/pink-flowers-blue-sky-pastel-desktop-wallpaper-preview.jpg"
            projectTitle="Work title"
            projectDesc="Some description"
            />
        </div>
    );
}