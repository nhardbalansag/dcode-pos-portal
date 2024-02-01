import React from 'react'

export default function DashboardStatusCard({
    icon, 
    statusTitle = 'title', 
    statusValue = '30k', 
    isPositive = true,
    value = '400',
    percentage = '22%'
}) {
  return (
    <div className="shadow stats">
        <div className="stat">
            <div className="stat-figure text-secondary">
                {icon}
            </div>
            <div className="capitalize stat-title">{statusTitle}</div>
            <div className={`stat-value ${isPositive ? 'text-secondary' : ''}`}>{statusValue}</div>
            <div className={`stat-desc ${isPositive ? 'text-secondary' : ''}`}>
                {
                    isPositive ? <>↗︎</> : <>↘︎</>
                }
                {`${value} (${percentage}%)`}
            </div>
        </div>
    </div>
  )
}
