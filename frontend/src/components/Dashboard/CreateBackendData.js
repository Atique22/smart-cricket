import React from "react";

export default function CreateBackendData() {
  return (
    <div>
      <div className="well  m-5">
        <div className="">
          <form
            action="http://127.0.0.1:8000/training/"
            method="POST"
            className="form-horizontal"
          >
            <fieldset>
              <div className="form-group ">
                <label className="col-sm-2 control-label ">Name</label>
                <div className="col-sm-10">
                  <input
                    name="Name"
                    className="form-control"
                    type="text"
                    // value=""
                    placeholder="enter name"
                  />
                </div>
              </div>

              <div className="form-group ">
                <label className="col-sm-2 control-label ">Comment</label>

                <div className="col-sm-10">
                  <input
                    name="Comment"
                    className="form-control"
                    type="text"
                    // value=""
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-2 control-label ">Frame</label>

                <div className="col-sm-10">
                  <input name="Frame" type="file" />
                </div>
              </div>

              <div className="form-group ">
                <label className="col-sm-2 control-label ">Middle</label>

                <div className="col-sm-10">
                  <input
                    name="Middle"
                    className="form-control"
                    type="number"
                    // value=""
                    defaultValue={0}
                  />
                </div>
              </div>

              <div className="form-group ">
                <label className="col-sm-2 control-label ">Edge</label>

                <div className="col-sm-10">
                  <input
                    name="Edge"
                    className="form-control"
                    type="number"
                    // value=""
                    defaultValue={0}
                  />
                </div>
              </div>

              <div className="form-group ">
                <label className="col-sm-2 control-label ">Missed</label>

                <div className="col-sm-10">
                  <input
                    name="Missed"
                    className="form-control"
                    type="number"
                    // value=""
                    defaultValue={0}
                  />
                </div>
              </div>

              <div className="mt-2 form-actions">
                <button className="btn btn-primary js-tooltip">POST</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
