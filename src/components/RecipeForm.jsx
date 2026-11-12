
export default function RecipeForm() {
  return (

      <article>
        <form>
          <div>
            <label htmlFor="recipename">
              Opskriftens titel
            </label>

            <input
              type="text"
              id="recipename"
              name="recipename"
              placeholder="Fx. Lasagne"
            />
          </div>

          <button type="submit">
            Opret opskrift
          </button>
        </form>
      </article>
   
  );
}
