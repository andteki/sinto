const appContent = `
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;

public class App extends Application {

    private static Scene scene;

    @Override
    public void start(Stage stage) throws IOException {
        scene = new Scene(loadFxml("mainScene"), 640, 480);
        stage.setScene(scene);
        stage.show();
    }

    static void setRoot(String fileName) throws IOException {
        scene.setRoot(loadFxml(fileName));
    }

    private static Parent loadFxml(String fileName) {
        try {
            return tryLoadFxml(fileName);
        } catch (IOException e) {
            System.err.println("Unable to load FXML file: " + fileName);
            System.err.println(e.getMessage());
            return null;
        }
    }
        
    private static Parent tryLoadFxml(String fileName) throws IOException {
        FXMLLoader loader = new FXMLLoader(App.class.getResource(fileName + ".fxml"));
        return loader.load();
    }

    public static void main(String[] args) {
        launch();
    }

}
`
module.exports = appContent
