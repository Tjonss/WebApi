import CaseCard from './CaseCard'

const CasesContainer = () => {
  return (
    <div className='container'>
    <h2 className='text-center mt-3 mb-4 Create'>Customer cases</h2>

      <CaseCard />
      <CaseCard />
      <CaseCard />
      <CaseCard />
      <CaseCard />
    
    </div>
  )
}

export default CasesContainer