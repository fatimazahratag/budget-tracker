import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import categories from "../data/categories";

export default function AddExpense({ onAdd, currency }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [cat, setCat] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;

    onAdd({
      name,
      amount: Number(amount),
      category: cat,
    });

    setName("");
    setAmount("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center text-white text-xl">
            Nouvelle dépense
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 sm:grid-cols-4 items-end"
          >
            <Input
              placeholder="Libellé"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/10 text-white border-white/30
                         focus:bg-white/20 focus:border-white/40"
            />

            <Input
              type="number"
              step="0.01"
              placeholder={`Montant (${currency})`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-white/10 text-white border-white/30
                         focus:bg-white/20 focus:border-white/40"
            />

            <Select value={cat} onValueChange={setCat}>
              <SelectTrigger
                className="bg-white/10 text-white border-white/30
                           focus:bg-white/20"
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="bg-white/20 backdrop-blur-xl border border-white/30">
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              type="submit"
              className="bg-white/20 text-white border border-white/30
                         hover:bg-white/30 hover:-translate-y-1
                         transition-all duration-200"
            >
              Ajouter
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
