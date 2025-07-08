import { getAllJsonData} from '../public/references';

export default async function Page(){
    const allJsonData = await getAllJsonData('references');

    return (
        <div>
            <h1>Data from Multiple JSON Files</h1>
            {allJsonData.map((references, index)=> (
                <div key={index}>
                    
                <pre>{JSON.stringify(data, null,2)}</pre>
                </div>
            ))}
        </div>
    )
}