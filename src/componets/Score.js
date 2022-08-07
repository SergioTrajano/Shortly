export default function Score({ userData}) {

    return (
        <li>
            <span>{userData.name} - </span>
            <span>{userData.linksCount} links - </span>
            <span>{userData.visitCount} visualizações</span>
        </li>
    );
}