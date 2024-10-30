import React from 'react'

function Projectscard({vis, name, GithubRepo,Deployment, owner}) {
  return (
    <div className='border rounded-lg border-slate-400 p-8 bg-black'>
      <img src={vis} />
      <h1 className='text-white pb-3 font-bold'>{name} </h1>
      <a href={GithubRepo} target='_blank' className='text-white'>Github Repo</a>
      <p className='text-white'>By {owner}</p>
    </div>
  )
}

export default Projectscard