# EdgeVector
Edge Vector representation is a novel method of representing graphs. It was introduced in [1]. The advantage of this representation is the minimum requirement in memory usage, in comparison to competition. Also encoding a graph in Edge Vector or decoding the graph elements from the representation is efficient with polynomial complexity.

More details [here.](https://rodispantelis.github.io/EdgeVector/)

In the libraries folder there are coders / decoders implemented in Java and Javascript. Also a Javascript library for converting files from Dimacs format to Edge Vector that is used as a benchmark.

In the randographs folder there is a web application for generating randomgraphs.

In the DIMACS folder there graphs from the [Second DIMACS Implementation Challenge](http://archive.dimacs.rutgers.edu/Challenges/), they may be used as benchmark.

#Edge vector for directed graphs
Let $s$ be a vector that represents directed graph $G(V, E)$. 
The symbol in position $q$ of $s$ is $w$, if nodes $a$ and $b$ are adjacent and 0 if they are not adjacent, where $a < b$ and
\begin{equation}
\label{q}
q=a+\sum_{x=0}^{b-1}x
\end{equation}

On non-weighted graphs, $w=1$ for $a \to b$, $w=2$ for $b \gets a$ and $w=3$ for $a \leftrightarrow b$.
For weighted graphs we form additional vector $s_w$ so that in position $p$ of $s_w$ we assign the weight of the edge denoted in position $p$ of $s$.
In the special case of bidirectinal edge $(a, b)$ in which different weights apply in each direction, $s_w$ is formatted as $w_1 | w_2$ where $w_1$ is the weight for $(a, b)$ and $w_2$ the weight for $(b, a)$.

#Edge Vector Index# 
Let $i$ be the array (or the tuple) that indexes the Edge Vector representation of graph $G$. 
For any edge $e(a,b) \in E$ we place in $i$ value $q$ as defined in \eqref{q}. On this way, the index that is produced does not contain redundant information about nonadjacent nodes. The order in which we index the edges in $i$ is not restrictive, we can use any indexing order that is appropriate for the problem under study.
In algorithm \ref{alg:index} we describe our indexing method appropriate for NN representation; its complexity is $O(n^2)$.

\begin{algorithm}
 \caption{NN Edge Vector Index representation}
   \label{alg:index}
 \begin{algorithmic}[1]
 \renewcommand{\algorithmicrequire}{\textbf{Input:}}
 \renewcommand{\algorithmicensure}{\textbf{Output:}}
 \REQUIRE Neural Network $N$
\ENSURE Edge Vector Index $i$
\FOR{every layer $c$ of $N$}
    \FOR{every node $n$ in $c$}
        \FOR{every node $j$ in $N$}
            \IF{$n \neq j$ and $n$ is adjacent to $j$}
                \STATE compute and add $q$ in $i$
            \ENDIF
        \ENDFOR
    \ENDFOR
\ENDFOR
\RETURN $i$
 \end{algorithmic}
 \end{algorithm}

An example of a small NN representation in Edge Vector Index is illustrated in fig.~\ref{fig:smallnn}.

\Figure[t!](topskip=0pt, botskip=0pt, midskip=0pt)[width=0.99\linewidth]{smallNN.png}{ \textbf{A small NN with random integer edge weights in Edge Vector and Edge Vector Index representations.}\label{fig:smallnn}}

Directed edges are represented by array $i_{dir}$ so that in position $p$ of $i_{dir}$ we assign value 1, 2 or 3 as defined above that denotes the direction of the edge indexed in position $p$ of index $i$. Edge weights are denoted in array $i_w$ so that in position $p$ of $i_w$ we assign the weight of the edge denoted in position $p$ of $i$.

In the case of graph $G$ with weighted nodes, the node weights are stored in a \textit{Node Weight Vector}. Therefore, in vector $k:\langle w_0, w_1, …, w_v \rangle$ the value $w_n$ represents the weight of node $n$. 


---

[1] P. Rodis and P. Papadimitriou, "Intelligent Network Service Embedding using Genetic Algorithms," 2021 IEEE Symposium on Computers and Communications (ISCC), 2021, pp. 1-7, doi: 10.1109/ISCC53001.2021.9631456. [pdf.](https://pantelisrodis.appspot.com/papers/ISCC_2021.pdf)
