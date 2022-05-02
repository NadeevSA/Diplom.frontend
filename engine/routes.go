package main

import (
	"engine_app/auth"
	"engine_app/controllers"
	"github.com/gorilla/mux"
)

func AddRoutes(app *controllers.App) *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/user", auth.Auth(app.UserController.GetAllUser, app.UseAuth)).Methods("GET")
	router.HandleFunc("/user", app.UserController.AddUser).Methods("POST")
	router.HandleFunc("/user", app.UserController.PutUser).Methods("PUT")
	router.HandleFunc("/user", app.UserController.DeleteUser).Methods("DELETE")
	router.HandleFunc("/user/filter", auth.Auth(app.UserController.GetFilteredUser, app.UseAuth)).Methods("GET")

	router.HandleFunc("/project_doc", app.ProjectConfigController.GetAllProjectConfig).Methods("GET")
	router.HandleFunc("/project_doc", app.ProjectConfigController.AddProjectConfig).Methods("POST")
	router.HandleFunc("/project_doc", app.ProjectConfigController.PutProjectConfig).Methods("PUT")
	router.HandleFunc("/project_doc", app.ProjectConfigController.DeleteProjectConfig).Methods("DELETE")

	router.HandleFunc("/project_doc/file", app.ProjectConfigController.AddProjectConfigFiles).Methods("POST")
	router.HandleFunc("/project_doc/build", app.BuilderController.BuildProjectDoc).Methods("POST")
	router.HandleFunc("/project_doc/run", app.BuilderController.RunProjectDoc).Methods("POST")
	router.HandleFunc("/project_doc/attach", app.BuilderController.AttachProjectDoc).Methods("POST")

	router.HandleFunc("/project", app.ProjectController.GetAllProject).Methods("GET")
	router.HandleFunc("/project", app.ProjectController.AddProject).Methods("POST")
	router.HandleFunc("/project", app.ProjectController.PutProject).Methods("PUT")
	router.HandleFunc("/project", app.ProjectController.DeleteProject).Methods("DELETE")
	router.HandleFunc("/project/filter", auth.Auth(app.ProjectController.GetFilteredProject, app.UseAuth)).Methods("GET")

	return router
}
