package esy.app;

import esy.api.info.Version;
import esy.api.team.NutzerValue;
import esy.api.plan.AufgabeValue;
import esy.api.plan.ProjektValue;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static org.junit.jupiter.api.Assertions.assertTrue;

@Tag("fast")
public class BackendSpecificationTest {

    private <T> Path restApiFor(final Class<T> clazz) {
        return Paths.get(String.format("src/main/java/%sRestApi.adoc",
                clazz.getName()
                        .replace("esy.api.", "esy/app/")
                        .replaceAll("\\.", "/")));
    }

    @Test
    void service() {
        // check existence of all adoc files for doc/service.adoc
        assertTrue(Files.exists(restApiFor(AufgabeValue.class)));
        assertTrue(Files.exists(restApiFor(NutzerValue.class)));
        assertTrue(Files.exists(restApiFor(ProjektValue.class)));
        assertTrue(Files.exists(restApiFor(Version.class)));
    }
}
