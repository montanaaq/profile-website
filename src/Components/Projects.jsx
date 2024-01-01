import { useState } from 'react'
import Button from '@mui/material/Button';
import { ProjectsList } from '../data/Projects/ProjectsList';
import { enqueueSnackbar } from 'notistack';

const Projects = () => {
    const [show, setShow] = useState(false)
    const toggleProjects = (variant) => () => {
        setShow(!show)
        variant === 'success' ? enqueueSnackbar('Opened!', { variant }) : enqueueSnackbar('Closed!', { variant });
    }
    return ( 
        <div>
            <Button variant='outlined' onClick={!show ? toggleProjects('success') : toggleProjects('error')} style={{marginTop: '10px'}} size='small'>{show ? 'Hide' : 'Show'} projects</Button>
            { show && (<div className="projects-list">
                    {
                        ProjectsList.map((project) =>(<p>
                            <a href={project.link} target='_blank' rel="noreferrer">{project.main_name}</a>:&nbsp;
                                {project.date}
                                <br />
                                {project.info}
                                </p>))
                    }
                </div>)}
        </div>
     );
}

export default Projects;