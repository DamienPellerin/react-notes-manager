import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";
import { setNoteList } from "store/note/note-slice";
import s from "./style.module.css";

//import { NoteBrowse } from "pages/NoteBrowse/NoteBrowse";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className={s.outlet_container}>
        <Outlet />
      </div>
    </div>
  );
}
