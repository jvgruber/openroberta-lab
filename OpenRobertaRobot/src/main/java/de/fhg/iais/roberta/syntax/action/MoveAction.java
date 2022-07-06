package de.fhg.iais.roberta.syntax.action;

import de.fhg.iais.roberta.util.ast.BlocklyProperties;
import de.fhg.iais.roberta.util.syntax.WithUserDefinedPort;

public abstract class MoveAction<V> extends Action<V> implements WithUserDefinedPort<V> {
    public final String port;

    public MoveAction(BlocklyProperties properties, String port) {
        super(properties);
        this.port = port;
    }

    @Override
    public String getUserDefinedPort() {
        return this.port;
    }
}
