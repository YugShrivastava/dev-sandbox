import {Input} from "./"

function Show({setShowFinish, showFinish}) {

  

  return (
    <div className="flex flex-wrap gap-3 items-center justify-baseline mb-8">
      <Input width={'w-4'} height={'h-4'} checked={showFinish} setShowFinish={setShowFinish} shwoFinish={showFinish}/>
      <p className="text-white text-xl font-light">
        Show Finished
      </p>
    </div>
  )
}

export default Show
