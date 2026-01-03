import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import categories from "../data/categories";

export default function ExpenseTable({ data, onDelete, onEdit, currency }) {
  const [editId, setEditId] = useState(null);
  const [draft, setDraft] = useState({});

  const save = () => {
    onEdit(editId, draft);
    setEditId(null);
  };

  return (
<Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Libellé</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((e) => (
              <TableRow key={e.id}>
                {editId === e.id ? (
                  <>
                    <TableCell><Input value={draft.name} onChange={(ev) => setDraft({ ...draft, name: ev.target.value })} /></TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        step="0.01"
                        value={draft.amount}
                        onChange={(ev) => setDraft({ ...draft, amount: Number(ev.target.value) })}
                      />
                    </TableCell>
                    <TableCell>
                      <Select value={draft.category} onValueChange={(v) => setDraft({ ...draft, category: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {categories.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button size="sm" onClick={save}>Save</Button>
                      <Button variant="outline" size="sm" onClick={() => setEditId(null)}>Cancel</Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{e.name}</TableCell>
                    <TableCell>{e.amount.toFixed(2)} {currency}</TableCell>
                    <TableCell><Badge variant="secondary">{e.category}</Badge></TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => { setEditId(e.id); setDraft(e); }}>
                        <PencilIcon className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => onDelete(e.id)}>
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}