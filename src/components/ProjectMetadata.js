import ExportedImage from "next-image-export-optimizer";

const ProjectMetadata = ({data}) => {
    
    return (
        <div key={data.id}>
            <h1>{data.title}</h1>
            <ExportedImage src={"images/"+data.cover} alt="cover-image" width={100} height={50}/>
            <p>{data.description}</p>
            <ul className="list-disc">
                {
                    data.tech.map( (t,index) => {
                        return <li key={data.id+"-"+index}>{t}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ProjectMetadata