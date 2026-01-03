import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Summary({ budget, total, remaining, currency }) {
  const data = {
    labels: ["Dépensé", "Restant"],
    datasets: [
      {
        data: [total, remaining],
        backgroundColor: ["#ef4444", "#22c55e"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-white">Résumé</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-4 items-center text-white">
        <div>
          <p className="text-sm text-white/70">Budget</p>
          <p className="text-2xl font-bold">{budget.toFixed(2)} {currency}</p>
        </div>
        <div>
          <p className="text-sm text-white/70">Dépensé</p>
          <p className="text-2xl font-bold text-red-300">{total.toFixed(2)} {currency}</p>
        </div>
        <div>
          <p className="text-sm text-white/70">Restant</p>
          <p className="text-2xl font-bold text-green-300">{remaining.toFixed(2)} {currency}</p>
        </div>
        {total > 0 && (
          <div className="w-32 h-32 place-self-center">
            <Doughnut
              data={data}
              options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}