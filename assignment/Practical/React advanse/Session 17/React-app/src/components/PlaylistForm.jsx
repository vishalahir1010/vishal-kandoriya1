import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  playlistName: Yup.string().required("Playlist name is required"),

  description: Yup.string(),

  genre: Yup.string().required("Genre is required"),
});

function PlaylistForm() {
  return (
    <Formik
      initialValues={{
        playlistName: "",
        description: "",
        genre: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <Form>

          <h2>Create Playlist</h2>

          <Field
            name="playlistName"
            placeholder="Playlist Name"
          />

          {touched.playlistName && errors.playlistName && (
            <div style={{ color: "red" }}>
              {errors.playlistName}
            </div>
          )}

          <br /><br />

          <Field
            as="textarea"
            name="description"
            placeholder="Description"
          />

          <br /><br />

          <Field as="select" name="genre">
            <option value="">Select Genre</option>
            <option>Pop</option>
            <option>Rock</option>
            <option>Jazz</option>
            <option>Hip-Hop</option>
          </Field>

          {touched.genre && errors.genre && (
            <div style={{ color: "red" }}>
              {errors.genre}
            </div>
          )}

          <br /><br />

          <button type="submit">
            Create Playlist
          </button>

        </Form>
      )}
    </Formik>
  );
}

export default PlaylistForm;