import React from "react";
import { useState } from "react";
import './Transformers.css';

function Transformers() {
  // const options = ["rm_null_attr", "cld_words", "lang_dist", "data_dist", "stance_dist", "local_dist", "topic_detection"]
  // const [buttonClicked, ]
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [rm_null_attr, setRm_null_attr] = useState(false);
  const [cld_words, setCld_words] = useState(false);
  const [lang_dist, setLang_dist] = useState(false);
  const [data_dist, setData_dist] = useState(false);
  const [stance_dist, setStance_dist] = useState(false);
  const [local_dist, setLocal_dist] = useState(false);
  const [topic_detection, setTopic_detection] = useState(false);

  const handelSubmit = async (event) => {
    event.preventDefault();
    console.log("React hates us");
    try {
      setLoading(true);
      let res = await fetch("http://localhost:8000/", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          rm_null_attr: rm_null_attr,
          cld_words: cld_words,
          lang_dist: lang_dist,
          data_dist: data_dist,
          stance_dist: stance_dist,
          local_dist: local_dist,
          topic_detection: topic_detection,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200){
        console.log("data submitted successfully");
        setLoading(false);
        if (resJson["images"] != 0){
          setImages(resJson["images"]);
        }
      }else{
        console.log("Some error occured");
      }
    } catch (err){
      console.log(err);
    }
  };

  return(
    <div className="full-container">

      {loading == true && images.length == 0 && (
        <div className="loading-page">
          <img src="/loading.gif" alt="loading img"/>
        </div>
      )}


    
      {loading == false && images.length != 0 && (
        <div className="images-page">
          <div className="image-container">
            {images.map((image, index) => (
              <img key={index} src={`http://localhost:8000${image}`} alt={`image-${index-1}`}/>
            ))}
          </div>
        </div>
      )}


      {loading == false && images.length == 0 && (
        <div className="form-page">
          <div className="logo-container">
            <img src="/logo.webp"/>
            <h1>Transformers</h1>
          </div>
          <div className="form-container">
            <form onSubmit={handelSubmit}>
              <label className="form-label" htmlFor="name">Title:</label> 
              <input
                className="form-input"
                type="text"
                id="name"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              /> 

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rm_null_attr"
                  onChange={(e) => setRm_null_attr(e.target.checked)}
                /> remove null attributes
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="cld_words"
                  onChange={(e) => setCld_words(e.target.checked)}
                /> cloud of words
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="lang_dist"
                  onChange={(e) => setLang_dist(e.target.checked)}
                /> language distribution
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="data_dist"
                  onChange={(e) => setData_dist(e.target.checked)}
                /> data distribution
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="stance_dist"
                  onChange={(e) => setStance_dist(e.target.checked)}
                /> stance distribution
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="local_dist"
                  onChange={(e) => setLocal_dist(e.target.checked)}
                /> local distribution
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="topic_detection"
                  onChange={(e) => setTopic_detection(e.target.checked)}
                /> topic detection
              </label>


              <div className="submit-button-wrapper"> 
                <button className="submit-button" type="submit">Submit</button> 
              </div> 
            </form>
          </div>
        </div>
      )}






    </div>
  )
 }

export default Transformers;
