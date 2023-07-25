import { db } from "../database";

export const updateListingRoute = {
  method: "POST",
  path: "/api/listings/{id}",
  handler: async (req, res) => {
    const { id } = req.params;
    console.log(req.payload);
    const { name, description, price } = req.payload;
    const userId = "12345";
    await db.query(
      "UPDATE listings SET name=?, description=?, price=? WHERE id=? AND user_id=?",
      [name, description, price, id, userId]
    );

    const { results } = await db.query(
      "SELECT * FROM listings WHERE id=? AND user_id=?",
      [id, userId]
    );
    return results[0];
  },
};
