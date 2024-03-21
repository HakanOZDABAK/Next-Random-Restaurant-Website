
export default function MealReview({
    params,
  }: {
    params: { mealName: string };
  }){
  return (
    <div>{params.mealName}</div>
  )
}
