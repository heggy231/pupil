import Multiselect from 'react-bootstrap-multiselect'

const data = [{ value:'One', selected:true }, { value: 'Two' }, { value:'Three' }]

const Skills = props => {
  return (
      <>
  <h4>no optgroups:</h4>
  <Multiselect data={data} multiple />
  <h4>with optgroups:</h4>
  <Multiselect data={data} multiple />
  <h4>single select:</h4>
  <Multiselect data={data} />
  <h4>large list (maxHeight/buttonText):</h4>
  </>
  )
}

export default Skills