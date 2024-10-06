const TraitBar = ({ trait, percentage }: { trait: string; percentage: number }) => (
  <div className="mb-2">
    <div className="mb-2 flex flex-col justify-between">
      <span className="text-md font-semibold">{trait}</span>
      <span className="text-sm font-medium leading-tight opacity-80">{percentage}%</span>
    </div>
    <div className="h-1.5 w-full rounded-full bg-purple-700">
      <div className="h-1.5 rounded-full bg-white" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
)

export const MBTIProfileBox = () => {
  const traits = [
    { name: 'Introversion', percentage: 53 },
    { name: 'Intuition', percentage: 84 },
    { name: 'Feeling', percentage: 51 },
    { name: 'Judging', percentage: 89 },
  ]

  return (
    <div className="flex h-full flex-col justify-between p-7 tracking-wide text-white xl:p-4">
      <div>
        {traits.map((trait, index) => (
          <TraitBar key={index} trait={trait.name} percentage={trait.percentage} />
        ))}
      </div>
      <div className="text-right">
        <p className="text-xl">my mbti</p>
        <p className="text-3xl font-bold">INFJ</p>
      </div>
    </div>
  )
}
